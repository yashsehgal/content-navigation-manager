const Callout: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = ({ ...attr }) => {
  return (
    <div className="my-6 py-2.5 px-4 border-l-2 border-l-gray-900 text-lg font-medium tracking-tight">
      {attr?.children}
    </div>
  );
};

export default Callout;
