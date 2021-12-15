import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ClothMain from "./ClothMain"
import Modal from "./modal"
import Search from "./Search"
import { selectGroupdId, selectModal, setModal } from "../../slices/appSlices"
import { useDispatch, useSelector } from "react-redux"
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs"

const query = graphql`
  {
    allContentfulClothings {
      nodes {
        description {
          description
        }
        id
        photos {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
            formats: JPG
            width: 1000
            quality: 70
            cropFocus: CENTER
          )
        }
        quantity
        sales
        title
        price
      }
    }
  }
`

const AllProducts = () => {
  const {
    allContentfulClothings: { nodes: data },
  } = useStaticQuery(query)

  const groupId = useSelector(selectGroupdId)
  const isModal = useSelector(selectModal)
  const dispatch = useDispatch()

  const modalData = data.filter(item => item.id === groupId)
  const photos = modalData?.[0]?.photos

  const [current, setCurrent] = React.useState(0)
  const length = photos?.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  // if (!Array.isArray(photos) || photos.length <= 0) {
  //   return null
  // }

  // Filtering
  const [search, setSearch] = React.useState("")
  const [filterData, setFilterData] = React.useState([])

  const handleSearch = e => {
    e.preventDefault()

    // Filter data by search parameters
    const filteredData = []
    data.filter(item => {
      const itemTitle = item.title.toLowerCase()
      if (itemTitle.includes(search.toLowerCase())) {
        return filteredData.push(item)
      }
    })

    setSearch("")
    setFilterData(filteredData)
  }

  const handleChange = e => {
    setSearch(e.target.value)
  }

  return (
    <div className="clothings-container">
      <div className="clothings-search">
        {!isModal && (
          <Search
            onChange={handleChange}
            search={search}
            onSearch={handleSearch}
            data2={filterData}
          />
        )}
      </div>
      {!isModal ? (
        <div className="cloth-page">
          {filterData.length === 0
            ? data.map(itm => <ClothMain key={itm.id} data={itm} />)
            : filterData.map(itm => <ClothMain key={itm.id} data={itm} />)}
        </div>
      ) : (
        <section className="slder">
          <BsArrowLeftSquareFill className="left-arrow" onClick={prevSlide} />
          <BsArrowRightSquareFill className="right-arrow" onClick={nextSlide} />
          {photos?.map((image, index) => {
            return (
              <div className="modal-index-cont">
                <div
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && <Modal data={image} />}
                </div>
              </div>
            )
          })}
          <div className="modal-index">
            <span>{`${current + 1} of ${length}`}</span>
          </div>
          <div
            onClick={() => dispatch(setModal(false))}
            className="close-modal"
          >
            <span>CLOSE</span>
          </div>
        </section>
      )}
    </div>
  )
}

export default AllProducts
