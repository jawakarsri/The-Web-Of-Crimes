import Slider from "./Slider"

const Footer = () => {
  return (
    <div>
      <Slider />
      <div className="py-7 font-Canopee text-2xl  flex flex-row justify-between px-6 ">
        <a target="_blank" href="https://github.com/jawakarsri">
          Jawa©
        </a>

        <div className=" flex gap-2 ">
          <a target="_blank" href="mailto:jawaharsri2003@gmail.com">
            Mail
          </a>
          <span>•</span>
          <a target="_blank" href="https://github.com/jawakarsri">
            Github
          </a>
          <span>•</span>
          <a target="_blank" href="https://www.linkedin.com/in/jawakarsri/">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
