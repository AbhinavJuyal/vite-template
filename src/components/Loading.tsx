import { RefreshIcon } from "@heroicons/react/solid"

const Loading = () => {
  return (
    <div className="flex items-center space-x-2 font-black tracking-tighter">
      Loading... <RefreshIcon className="w-8 h-8 animate-spin" />
    </div>
  )
}
export default Loading
