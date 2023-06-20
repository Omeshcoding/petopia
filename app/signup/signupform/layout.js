import FormSidebar from '@components/FormSidebar';
const layout = ({ children }) => {
  return (
    <div className="flex w-[100%]">
      <FormSidebar />
      <div>{children}</div>
    </div>
  );
};

export default layout;
