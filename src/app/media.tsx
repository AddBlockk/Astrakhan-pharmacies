const styles = {
  h1: "uppercase font-bold text-[40px] md:text-[52px] lg:text-[58px] xl:text-[64px] leading-[52px] md:leading-[58px] lg:leading-[64px] xl:leading-[70px] max-w-[600px]",
  h2: "font-bold text-[16px] my-[20px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[20px] md:leading-[24px] lg:leading-[28px] xl:leading-[32px]",
  default:
    "font-regular text-[#A3B3BC] md:max-w-[500px] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[28px] xl:leading-[32px]",

  //header components
  header:
    "mt-[30px] mb-[20px] block justify-between items-center lg:flex lg:mb-[90px] lg:items-center md:mb-[20px] xl:mx-[10px]",
  headerNav:
    "block text-white font-semibold gap-16 text-[20px] mt-[20px] md:text-[16px] lg:flex lg:justify-center lg:mt-[0px]",
  //activity section
  slider:
    "shadow-md mb-5 max-xl:w-full m-auto justify-center overflow-hidden xl:w-[1180px] max-w-[320px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1180px]",
  sliderContainer:
    "bg-[#161B22] rounded-2xl flex flex-col max-w-[150px] dropShadow-3 h-[210px] md:h-[220px] lg:h-[250px]",
  sliderText:
    "h-[auto] text-[14px] md:text-[16px] lg:text-[20px] xl:text-[22px] font-semibold text-[#D0DFFF] px-[20px] py-[20px]",
  sliderImg: "max-w-[auto]",
  //information section
  informationDiv:
    "grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr] xl:flex xl:justify-between xl:mx-[10px]",
  informationText: "max-w-[500px]",
  informationImg: "flex relative max-w-[100%]",
  informationChainPeople:
    "absolute right-4 top-[140px] md:top-60 md:right-32 lg:right-12 xl: w-[auto] h-[auto]",
};

export default styles;
