import Comment from "components/Comment"
import { useId, useState } from "react"
import { CommentType } from "types"

interface ICommentListProps {
  comments: CommentType[]
}

const CommentList: React.FC<ICommentListProps> = ({
  comments,
}: ICommentListProps) => {
  const ACCORDIONS = Array(comments.length).fill(false)
  const [expandedArray, setExpandedArray] = useState(ACCORDIONS)

  const toggleAccordion = (idx: number) => {
    setExpandedArray((prev) =>
      prev.map((item, i) => (i === idx ? !item : false))
    )
  }

  const prefix = useId()
  return (
    <div className="flex flex-col items-center">
      {comments.map((comment: CommentType, i: number) => (
        <Comment
          key={`${prefix}-${i}`}
          idx={i}
          comment={comment}
          isExpanded={expandedArray.at(i)}
          toggleAccordion={toggleAccordion}
        />
      ))}
    </div>
  )
}

export default CommentList
