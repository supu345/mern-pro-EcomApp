import CreateForm from "../components/dashboard/CreateForm";
import Layout from "../components/layout/layout";
import ProductStore from "../store/ProductStore";

const CreateProduct = () => {
  return (
    <Layout>
      <CreateForm />
    </Layout>
  );
};

export default CreateProduct;
