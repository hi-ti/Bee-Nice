import React, { useState } from "react"
import "./details.css"
import "../../components/header/header.css"
// import img from "../../assets/images/b5.jpg"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../../assets/data/data"

export const DetailsPages = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  }, [id])

  return (
    <>
      {blogs ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={blogs.cover} alt='' />
            </div>
            <div className='right'>
              <div className='buttons'>
                <button className='button'>
                  <BsPencilSquare />
                </button>
                <button className='button'>
                  <AiOutlineDelete />
                </button>
              </div>
              <h1>Lorem ipsum</h1>
              <p>{blogs.desc}</p>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum ut justo sed tristique. Duis gravida tortor a orci placerat accumsan vel nec arcu. Quisque hendrerit porta libero, non congue sem dictum vel. Aenean sollicitudin ante nunc, a vehicula metus malesuada quis. Praesent libero nibh, posuere vel enim quis, convallis lacinia metus. Praesent ac interdum diam. Praesent fermentum felis nec est tincidunt cursus. Fusce pellentesque sed justo at commodo. Nulla facilisi. Ut sit amet auctor tellus, quis iaculis magna. Nunc pretium velit justo, eu malesuada mauris eleifend in. Quisque sodales felis a consequat rhoncus. Cras magna augue, mattis nec iaculis nec, vehicula nec urna.

Nulla sed enim sed dui congue fermentum non sit amet nisi. Suspendisse pulvinar quam ex. Fusce ultrices lacus mi, vitae imperdiet velit luctus at. Ut porttitor justo mauris, sed posuere sapien gravida et. Ut nisl diam, dictum in lobortis sed, fermentum id arcu. Nam malesuada metus aliquam, viverra arcu nec, varius lectus. Curabitur ullamcorper nec neque ut pulvinar. Morbi pharetra arcu at felis rutrum, at viverra enim convallis. Cras fermentum sapien a mauris tristique iaculis. Aliquam egestas sollicitudin nulla in lobortis. Pellentesque luctus ex nec velit consectetur, et laoreet lorem vestibulum. Nulla vel est ornare, lobortis massa non, tincidunt sem. Morbi vel aliquet nisl. Praesent euismod massa quis metus rutrum, a dapibus nisl dignissim. In hac habitasse platea dictumst.

Curabitur laoreet auctor massa, eget consectetur ipsum convallis a. Sed leo diam, semper in commodo nec, iaculis eget odio. Vestibulum ac est eget felis ultrices convallis. Quisque auctor tincidunt egestas. Proin non tellus quis est bibendum porttitor. Nam eu nibh tincidunt, cursus dui nec, gravida lacus. Vestibulum scelerisque ipsum condimentum, convallis turpis vel, imperdiet nisi. Sed sodales finibus lobortis. Sed gravida arcu non quam lacinia pharetra.

Aliquam pellentesque ullamcorper diam sed accumsan. Curabitur interdum euismod convallis. Duis semper malesuada nisl a mattis. Vestibulum aliquam orci quis quam scelerisque, ut vehicula lacus lacinia. Integer varius purus ut convallis placerat. Nulla rutrum, arcu et convallis bibendum, erat arcu luctus diam, vitae pellentesque lorem felis a nibh. Cras vulputate orci id sem euismod, vel iaculis metus dapibus. Proin at mi a sem facilisis consequat. Nulla tristique quam eget dolor maximus, quis efficitur odio lobortis. Phasellus eu tristique libero, non egestas velit. Donec eu libero sed odio volutpat fringilla in eget mauris.

Proin odio leo, finibus at leo et, tempus scelerisque est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean et odio accumsan, placerat nisl at, egestas leo. Nunc ac elit eget felis feugiat viverra. Aenean sed lectus et ipsum tincidunt convallis quis ut nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque sit amet luctus sem, et malesuada nulla."</p>
              <p>Author: ABC</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
