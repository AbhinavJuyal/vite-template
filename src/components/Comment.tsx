import { ChevronDownIcon } from "@heroicons/react/solid"
import { CommentType } from "types"
import CommentList from "./CommentList"

interface ICommentProps {
  comment: CommentType
  idx: number
  isExpanded: boolean
  toggleAccordion: (index: number) => void
}

const Comment: React.FC<ICommentProps> = ({
  comment,
  idx,
  toggleAccordion,
  isExpanded,
}: ICommentProps) => {
  return (
    <>
      <div
        key={`${idx}-${comment.id}`}
        className={`"relative flex justify-between gap-2  w-[500px]  px-6 py-4 mt-2 text-gray-500 bg-gray-100 rounded-xl cursor-pointer hover:scale-105 shadow-md 
        ${isExpanded ? "transform-gpu transition-all ease-in scale-110 " : ""}`}
        onClick={() => toggleAccordion(idx)}
      >
        <p className="flex flex-col font-semibold">
          <span className="font-bold text-slate-700">{comment.author}</span>
          {comment.text
            ? isExpanded
              ? comment.text
              : comment.text.slice(0, 150)
            : "empty-comment"}
        </p>
        {comment.children.length > 0 && (
          <div className="w-6 h-6 bg-gray-300 rounded-full">
            <ChevronDownIcon
              className={`"w-6 h-6 transition-all ease-in-out transform-gpu ${
                isExpanded ? "" : "rotate-90"
              }`}
            />
          </div>
        )}
      </div>
      {isExpanded && (
        <div className="flex">
          <CommentList comments={comment.children} />
        </div>
      )}
    </>
  )
}

export default Comment
