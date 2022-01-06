import React, { useContext } from "react"
import { useStripe } from "@stripe/react-stripe-js"
import { Calendar } from "react-date-range"
// import { navigate } from "gatsby"
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file
import { db } from "../../firebase"
import { AuthContext } from "../context/auth"
import { fetchFromAPI } from "./utils/helpers"
import { BOOKINGS, USERS } from "../../const"
import { clearCartItem, selectCartItems } from "../../slices/appSlices"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "gatsby"
// import { setBookingObject } from "../../slices/appSlices"

function BookingPage() {
  const { user } = useContext(AuthContext)
  const stripe = useStripe()
  const [selectDate, setSelectDate] = React.useState("")
  const [proceed, setProceed] = React.useState(false)
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const [bookingData, setBookingData] = React.useState({
    session: "",
    category: "",
    service: "",
    personnel: "",
  })

  React.useEffect(() => {
    cartItems.length > 0 && dispatch(clearCartItem())
    selectDate &&
      setTimeout(() => {
        setProceed(true)
      }, 3000)
  }, [selectDate, cartItems.length])

  const handleSelect = ranges => {
    setSelectDate(ranges.toDateString())
  }

  const handleOnChange = e => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value })
  }

  // Proceed function
  const redirectToCheckout = async e => {
    e.preventDefault()

    // push data to FB
    db.collection(USERS)
      .doc(`${user?.email}/`)
      .collection(BOOKINGS)
      .add({
        reservation: new Date(),
        appointment: selectDate,
        session: bookingData.session,
        category: bookingData.category,
        service: bookingData.service,
        personnel: bookingData.personnel,
      })
      .then(() => {
        console.log(`SUCCESSFULL`)
      })
      .catch(error => console.log("Error" + error.message))

    // line items
    const response = await fetchFromAPI("create-checkout-session", {
      body: {
        shipping_options: [
          {
            shipping_rate_data: {
              type: "fixed_amount",
              fixed_amount: {
                amount: 0,
                currency: "cad",
              },
              display_name: "Free shipping",
              // Delivers between 5-7 business days
              delivery_estimate: {
                minimum: {
                  unit: "business_day",
                  value: 5,
                },
                maximum: {
                  unit: "business_day",
                  value: 7,
                },
              },
            },
          },
        ],
        line_items: [
          {
            price_data: {
              currency: "cad",
              product_data: {
                name: `Spa Service Appointment for ${selectDate}`,
              },
              unit_amount: 50 * 100,
            },
            quantity: 1,
          },
        ],
        customer_email: user?.email,
      },
    })
    const { sessionId } = response
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    })

    if (error) {
      console.log(error)
    }
  }

  const categories = [
    { id: "2", name: "Select..." },
    { id: "cat1", name: "Body Laser Treatment" },
    { id: "cat2 ", name: "Body Treatment" },
    { id: "cat3", name: "Free Consultation" },
    { id: "cat4", name: "Hydra Demobrasion" },
    { id: "cat5", name: "Phi - Brows" },
  ]
  const staffs = [
    { id: "4", name: "Select..." },
    { id: "staff1", name: "Anyone Available" },
    { id: "staff2", name: "Owner" },
  ]
  const services = [
    { id: "3", name: "Select..." },
    { id: "serv1", name: "Body Exfoliation / Suana Treatment" },
    { id: "serv2", name: "Brow Lamination" },
    { id: "serv3", name: "Chemical Peel" },
    { id: "serv4", name: "Facial" },
    { id: "serv5", name: "Hydradermabrasion" },
    { id: "serv6", name: "Lash Extension" },
    { id: "serv7", name: "Lash Lift" },
    { id: "serv8", name: "Microblading" },
    { id: "serv9", name: "Microneedling" },
    { id: "serv10", name: "Pink Lips" },
  ]
  const sessions = [
    { id: "1", name: "Select..." },
    { id: "ses1", name: "Morning : Opening Hour - Noon" },
    { id: "ses2", name: "Afternoon : Noon - 5PM" },
    { id: "ses3", name: "Evening : 5PM - Closing Hour" },
  ]

  return (
    <main className="book-page-container">
      <Link className="book-page-link" to="/">
        Back home
      </Link>
      <div className="booking-page">
        <div className="calendar-wrapper">
          <div className="booking-title">
            <h2>
              Schedule your appointment <span> now!</span>
            </h2>
          </div>
          <div>
            <Calendar
              color="#1b1b1d"
              date={new Date()}
              onChange={handleSelect}
              dateDisplayFormat="yyyy-MM-dd"
              className="calendar"
              backgroundColor="red"
            />
          </div>
          <>
            <div
              className={selectDate ? "select selected-date" : "selected-date"}
            >
              <span>- You have selected {selectDate} -</span>
            </div>
            <span
              className={
                proceed ? "selected-proceed selected" : "selected-proceed"
              }
            >
              You can proceed now
            </span>
          </>
        </div>
        <div className="right">
          <div>
            <div className="form-service">
              <form className="booking-form" action="/action_page.php">
                <div className="booking-form-label">
                  <label>Session</label>
                </div>
                <select
                  onChange={handleOnChange}
                  id="time"
                  value={bookingData.session}
                  name="session"
                >
                  {sessions.map(session => (
                    <option className="booking-select-option" key={session.id}>
                      {session.name}
                    </option>
                  ))}
                </select>
              </form>
            </div>
            <div className="form-service">
              <form className="booking-form" action="/action_page.php">
                <div className="booking-form-label">
                  <label>Category</label>
                </div>
                <select
                  onChange={handleOnChange}
                  id="category"
                  value={bookingData.category}
                  name="category"
                >
                  {categories.map(category => (
                    <option key={category.id}>{category.name}</option>
                  ))}
                </select>
              </form>
            </div>
            <div className="form-service">
              <form className="booking-form" action="/action_page.php">
                <div className="booking-form-label">
                  <label>Service</label>
                </div>
                <select
                  onChange={handleOnChange}
                  id="category"
                  value={bookingData.service}
                  name="service"
                >
                  {services.map(service => (
                    <option key={service.id}>{service.name}</option>
                  ))}
                </select>
              </form>
            </div>
            <div className="form-service">
              <form className="booking-form" action="/action_page.php">
                <div className="booking-form-label">
                  <label>Personnel</label>
                </div>
                <select
                  onChange={handleOnChange}
                  id="staff"
                  value={bookingData.personnel}
                  name="personnel"
                >
                  {staffs.map(staff => (
                    <option key={staff.id}>{staff.name}</option>
                  ))}
                </select>
              </form>
            </div>
          </div>
          <div>
            <div>
              {bookingData.personnel &&
              bookingData.service &&
              bookingData.category &&
              bookingData.session ? (
                <button onClick={redirectToCheckout} className="selected">
                  Submit Booking
                </button>
              ) : (
                <button className="booking-button">Submit Booking</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BookingPage
