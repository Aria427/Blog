const TableWrapper = ({ children }) => {
  return (
    <div className="my-1 flex justify-center">
      <div className="border-primary-500/30 bg-primary-100 dark:border-primary-500/20 dark:bg-primary-950/20 inline-block overflow-hidden rounded-lg border-2">
        <table className="m-0 text-sm">{children}</table>
      </div>
    </div>
  );
};

export default TableWrapper;
