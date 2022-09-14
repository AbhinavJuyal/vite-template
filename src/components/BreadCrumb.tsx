interface IBreadCrumbProps {
  basePath: string
  paths: string[]
  className?: string
}

const BreadCrumb: React.FC<IBreadCrumbProps> = ({
  basePath,
  paths,
  className,
}: IBreadCrumbProps) => (
  <h1
    className={`flex gap-2 mt-[112.75px] font-black text-slate-400 ${className}`}
  >
    {basePath}
    {paths.map((path) => (
      <div key={`-${path}-`} className="inline-flex gap-2">
        <p className="font-normal">{">"}</p>
        {path}
      </div>
    ))}
  </h1>
)

BreadCrumb.defaultProps = {
  className: "",
}

export default BreadCrumb
