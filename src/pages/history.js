import React, { useContext } from "react"
import Layout from "../components/Layout"
import { AuthContext } from "../context/auth"
import { db } from "../../firebase"
import { MdOutlineKeyboardArrowUp } from "react-icons/md"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

const History = () => {
  const { user } = useContext(AuthContext)
  const [readMore, setReadMore] = React.useState(false)
  const [matchIdx, setMatchIdx] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(true)
  const [bookingInfo, setBookingInfo] = React.useState({
    bookingHeader: [],
    bookingData: [],
  })
  const [shoppingInfo, setShoppingInfo] = React.useState({
    shoppingHeader: [],
    shoppingData: [],
  })

  const getObjectHeader = object => {
    let objectKeys = []
    if (object) {
      for (let i = 0; i < object.length; i++) {
        objectKeys.push(Object?.keys(object?.[i]?.data || []))
      }
    }
    return objectKeys
  }

  React.useEffect(() => {
    // getting booking history
    user &&
      db
        .collection("users")
        .doc(`${user?.email}/`)
        .collection("bookings")
        .orderBy("reservation", "asc")
        .onSnapshot(snapshot => {
          const results = snapshot.docs.map(doc => ({
            data: doc.data(),
          }))
          if (results) {
            let data = []
            for (const result of results) {
              data.push({
                appointment: result?.data.appointment,
                category: result?.data.category,
                personnel: result?.data.personnel,
                reservation:
                  `${new Date(
                    result?.data.reservation?.seconds * 1000
                  )?.toDateString()}` +
                  " at " +
                  `${new Date(
                    result?.data.reservation * 1000
                  )?.toLocaleTimeString()}`,
                service: result?.data.service,
                session: result?.data.session,
              })
            }
            setBookingInfo({
              bookingHeader: getObjectHeader(results),
              bookingData: data,
            })
          }
        })
    // getting shopping history
    user &&
      db
        .collection("users")
        .doc(`${user?.email}/`)
        .collection("shoppings")
        .orderBy("title", "asc")
        .onSnapshot(snapshot => {
          const results = snapshot.docs.map(doc => ({
            data: doc.data(),
          }))
          if (results) {
            let data = []
            for (const result of results) {
              data.push({
                address: result?.data.address,
                customer: result?.data.customer,
                description: result?.data.description,
                id: result?.data.id,
                price: `CA$ ${result?.data.price}`,
                quantity: result?.data.quantity,
                title: result?.data.title,
              })
            }
            setShoppingInfo({
              shoppingHeader: getObjectHeader(results),
              shoppingData: data,
            })
          }
        })
  }, [user])

  if (isLoading) {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }

  const toggleRead = idx => {
    setMatchIdx(idx)
    setReadMore(!readMore)
  }

  return (
    <div>
      <Layout>
        <main className="history-page">
          {bookingInfo?.bookingHeader.length === 0 &&
          shoppingInfo?.shoppingHeader.length === 0 ? (
            isLoading ? (
              <span>Loading...</span>
            ) : (
              <span>Data not Found</span>
            )
          ) : (
            <>
              <div className="top">
                {bookingInfo?.bookingHeader.length !== 0 && (
                  <p className="account-page-header">Bookings</p>
                )}
                <table>
                  <thead>
                    <tr className="table-head-row">
                      {bookingInfo?.bookingHeader?.[0]
                        ?.sort()
                        ?.map((head, idx) => (
                          <th key={idx} className="table-head-item">
                            {head}{" "}
                            {head === "appointment" || head === "reservation"
                              ? " - date"
                              : ""}
                          </th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {bookingInfo?.bookingData?.map((item, idx) => (
                      <tr className="table-item-row" key={idx}>
                        {Object?.values(item)?.map((itm, index) => (
                          <td className="table-items" key={index}>
                            {itm}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bottom">
                {shoppingInfo?.shoppingHeader.length !== 0 && (
                  <p className="account-page-header">Shoppings</p>
                )}
                <table>
                  <thead>
                    <tr className="table-head-row">
                      {shoppingInfo?.shoppingHeader?.[0]
                        ?.sort()
                        ?.map((head, idx) => (
                          <th key={idx} className="table-head-item">
                            {head}{" "}
                            {head === "appointment" || head === "reservation"
                              ? " - date"
                              : ""}
                          </th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {shoppingInfo?.shoppingData?.map((item, idx) => (
                      <tr className="table-item-row" key={idx}>
                        {Object?.values(item)?.map((itm, index) => (
                          <td
                            className={
                              itm.length >= 200
                                ? "table-items align-left"
                                : "table-items"
                            }
                            key={index}
                          >
                            {typeof itm === "string"
                              ? itm.length >= 200
                                ? readMore && matchIdx === idx
                                  ? itm
                                  : `${itm.substring(0, 70)}...`
                                : itm
                              : itm}
                            {itm.length >= 200 && (
                              <>
                                <span onClick={() => toggleRead(idx)}>
                                  {readMore && matchIdx === idx ? (
                                    <>
                                      <span>Read Less</span>{" "}
                                      <MdOutlineKeyboardArrowUp />
                                    </>
                                  ) : (
                                    <>
                                      <span>Read More</span>{" "}
                                      <MdOutlineKeyboardArrowDown />
                                    </>
                                  )}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </main>
      </Layout>
    </div>
  )
}

export default History
