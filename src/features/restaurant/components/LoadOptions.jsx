/* eslint-disable react/prop-types */
const LoadOptions = ({ data, Objkey }) => {
  if (!data) return null;
  const options = Objkey
    ? data?.data.map((item, index) => (
        <option value={item[Objkey]} key={index}>
          {item.name}
        </option>
      ))
    : data?.data.map((item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ));
  return options;
};

export default LoadOptions;
