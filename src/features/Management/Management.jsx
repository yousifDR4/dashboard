import { TabScroll, TabsContainer } from "./styledcomponents";
import useMangementDishes from "./hooks/useMangementDishes";
import Dishes from "./components/Dishes";
import useEditForm from "./hooks/useEditForm";
import BackDrop from "./components/BackDrop";
const Management = () => {
  const { category, categoryArray, changeCategory } = useMangementDishes();
  const { EditFormData, changeEditForm, isEditForm, toggleEditForm } =
    useEditForm();
  return (
    <header className="w-[86%] flex flex-col overflow-hidden pt-8">
      <h1 className="font-semibold text-xl pl-8"> Dishes Settings </h1>
      <TabScroll>
        <TabsContainer $count={categoryArray.length} $active={category}>
          {categoryArray.map((cat, index) => (
            <button
              className={`  ${
                category === index ? "text-[#8884d8]" : "text-[#1F384C]"
              }`}
              key={cat}
              onClick={() => changeCategory(index)}
            >
              {cat}
            </button>
          ))}
        </TabsContainer>
      </TabScroll>
      <Dishes
        EditFormData={EditFormData}
        changeEditForm={changeEditForm}
        isEditForm={isEditForm}
        toggleEditForm={toggleEditForm}
      />
      <BackDrop isOpen={isEditForm} toggleEditForm={toggleEditForm} />
    </header>
  );
};

export default Management;
