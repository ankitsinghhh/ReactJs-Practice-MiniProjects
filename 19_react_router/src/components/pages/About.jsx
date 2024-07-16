import React from 'react'

const About = () => {
  return (
    <div className="px-4 py-5 my-5 text-justify flex flex-col gap-7  i h-[calc(100vh-120px)] box-border">
    <div className="max-w-[1200px] mx-auto">
      <h1 className="text-5xl text-center font-bold mt-5">About Us</h1>
      <p className="text-lg leading-relaxed mt-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  </div>
  )
}

export default About