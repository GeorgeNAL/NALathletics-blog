type Props = {
  title: string
  coverImage: string
  date: string
  author: string
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <h1>{title}</h1>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <img src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          {author}
        </div>
        <div className="mb-6 text-lg">
          {date}
        </div>
      </div>
    </>
  )
}

export default PostHeader