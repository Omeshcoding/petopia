import FormSidebar from '@components/FormSidebar';
const layout = ({ children }) => {
  return (
    <div className="flex w-[100%]">
      <FormSidebar />
      <div className="w-[60%]">{children}</div>
    </div>
  );
};

export default layout;
