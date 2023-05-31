import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const panelClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return (
    <li {...rest} className={panelClassNames}>
      {children}
    </li>
  );
}

export default Panel;
