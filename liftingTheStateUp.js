//Parent File

const [showIndex, setShowIndex] = useState(null);
// This code is a React component invocation where RestaurantCategory is being passed a key based on the title property, data from category.card.card, showItems determined by comparing index and showIndex, and a function setShowIndex to update the showIndex state.
{categories.map((category, index) => (
                    //this is a controlled component
                    <RestaurantCategory
                        key={category?.card?.card?.title}
                        data={category?.card?.card}
                        showItems = {index === showIndex ? true : false} //this is telling the component, if the data should be showed or not
                        setShowIndex = {() => setShowIndex(index)} //this is a function, which helps us update the index from child component in the parent component
                    />
                ))}



// Child File

const RestaurantCategory = ({ data, showItems, setShowIndex}) => {
  const handleClick = () => {
    setShowIndex();
  };
   return (
    <div>
        {showItems && <ItemList items={data.itemCards}/>}
      </div>
    </div>
  );
};

export default RestaurantCategory;


