import React, { useContext } from "react"
import Layout from "../components/Layout"
import { db } from "../../firebase"
import { AuthContext } from "../context/auth"
import { MdOutlineKeyboardArrowUp } from "react-icons/md"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { AUTHORIZED_ID_1, AUTHORIZED_ID_2, AUTHORIZED_ID_3 } from "../../const"
import { Link } from "gatsby"

const Admin = () => {
  const { user } = useContext(AuthContext)
  const [isLoading, setIsLoading] = React.useState(true)
  const [modal, setModal] = React.useState(false)
  const [readMore, setReadMore] = React.useState(false)
  const [matchIdx, setMatchIdx] = React.useState("")
  const [shippingInfo, setShippingInfo] = React.useState({
    shippingHeader: [],
    shippingData: [],
  })
  const getObjectHeader = object => {
    let objectKeys = []
    if (object) {
      for (let i = 0; i < object.length; i++) {
        objectKeys.push(Object?.keys(object?.[i]?.data || []))
      }
    }
    objectKeys.map(item => item.sort())
    return objectKeys
  }

  React.useEffect(() => {
    // getting address and details for shipping
    user &&
      db
        .collection("admin")
        .doc(`${AUTHORIZED_ID_1}/`)
        .collection("all-purchased")
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

            setShippingInfo({
              shippingHeader: getObjectHeader(results),
              shippingData: data,
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
  const toggleModal = idx => {
    setMatchIdx(idx)
    setModal(true)
  }

  const hideShipped = id => {
    db.collection("admin")
      .doc(`${AUTHORIZED_ID_1}/`)
      .collection("all-purchased")
      .onSnapshot(snapshot => {
        snapshot.docs.map(
          doc =>
            doc.data().id === id &&
            db
              .collection("admin")
              .doc(`${AUTHORIZED_ID_1}/`)
              .collection("all-purchased")
              .doc(doc.id)
              .delete()
        )
      })
  }

  return (
    <div>
      <Layout>
        {user?.email === AUTHORIZED_ID_1 ||
        AUTHORIZED_ID_2 ||
        AUTHORIZED_ID_3 ? (
          <main className="history-page">
            {shippingInfo?.shippingHeader?.length === 0 &&
            shippingInfo?.shippingHeader?.length === 0 ? (
              isLoading ? (
                <span>Loading...</span>
              ) : (
                <span>Data not Found</span>
              )
            ) : (
              <>
                <div className="top">
                  {shippingInfo?.shippingHeader?.length !== 0 && (
                    <p>shipping Information</p>
                    // <p className="account-page-header">shipping Information</p>
                  )}
                  <table>
                    <thead>
                      <tr className="table-head-row">
                        {shippingInfo?.shippingHeader?.[0]?.map((head, idx) => (
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
                      {shippingInfo?.shippingData?.map(item => (
                        <tr className="table-item-row" key={item.id}>
                          {Object?.values(item)?.map((itm, index) => (
                            <td
                              className={
                                itm.length >= 200
                                  ? "table-items align-left"
                                  : "table-items"
                              }
                              key={index}
                              onClick={() => toggleModal(item.id)}
                            >
                              {typeof itm === "string"
                                ? itm.length >= 200
                                  ? readMore && matchIdx === item.id
                                    ? itm
                                    : `${itm.substring(0, 70)}...`
                                  : itm
                                : itm}
                              {itm.length >= 200 && (
                                <>
                                  <span onClick={() => toggleRead(item.id)}>
                                    {readMore && matchIdx === item.id ? (
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
                          {modal && matchIdx === item.id && (
                            <div className="been-shipped">
                              <span>
                                Has this product been shipped ? <br />
                                <span className="been-shipped-textsm">
                                  Please verify before clicking on yes
                                </span>
                              </span>
                              <div>
                                <button onClick={() => hideShipped(item.id)}>
                                  Yes
                                </button>
                                <button onClick={() => setModal(false)}>
                                  No
                                </button>
                              </div>
                            </div>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </main>
        ) : (
          <div className="history-page">
            <p className="danger">UNAUTHORIZED PATH!</p>
            <Link to="/" className="btn block total_btn">
              Back to Home
            </Link>
          </div>
        )}
      </Layout>
    </div>
  )
}

export default Admin
