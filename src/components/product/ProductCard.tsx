interface Props {
  name: string;
  hex: string;
  title: string;
}

export const ProductCard = ({ name, hex, title }: Props) => {
  return (
    <div
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg grid place-content-center bg-sky-950/10 hover:bg-sky-950/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-sky-100/10 px-4"
      // style={{
      //   boxShadow: `0px 0px 5px ${hex}`,
      // }}
    >
      <div className="flex flex-col items-center justify-center py-6">
        <div
          className={`w-24 h-24 mt-1 mb-4 rounded-full shadow-lg text-center`}
          style={{
            backgroundColor: hex,
          }}
        />
        <h5 className="text-center mb-1 text-base md:text-lg xl:text-xl font-bold text-gray-950/70 uppercase">
          {title}
        </h5>
        <p className="text-center text-sm md:text-base xl:text-lg font-medium text-gray-950/50">
          {name}
        </p>
      </div>
    </div>
  );
};
