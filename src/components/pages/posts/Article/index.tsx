interface Props {
  thumbnailUrl: string
  firstPublishedAt: string
  title: string
  description: string
  url: string
}

const Article = (props: Props) => {
  return (
    <div class="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
      <a href="#" class="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
        <img src={props.thumbnailUrl} loading="lazy" alt="Photo by Minh Pham" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
      </a>

      <div class="flex flex-col gap-2">
        <span class="text-gray-400 text-sm">{props.firstPublishedAt}</span>

        <h2 class="text-gray-800 text-xl font-bold">
          <a href="#" class="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{props.title}</a>
        </h2>

        <p class="text-gray-500">{props.description}</p>

        <div>
          <a href={props.url} class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default Article;