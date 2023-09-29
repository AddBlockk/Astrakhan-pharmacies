import Maps from "@/components/Map";

export default function Patient() {
  return (
    <div className="text-[20px] font-semibold text-[#A3B3BC] flex-col flex gap-[20px]">
      <div className="items-center text-center text-[36px] md:text-[60px] font-bold m-auto flex-col mb-[40px] gap-[20px] flex">
        <h1 className="text-white">Пациентам</h1>
      </div>
      <span>Наше местоположение:</span>
      <div>
        <a
          href="https://yandex.ru/maps/37/astrahan/house/ulitsa_yablochkova_36/YEEYdgFpSUwEQFpsfX93dH9nYw==/?ll=48.069093%2C46.365347&z=17"
          target="blank"
          className=""
        >
          Аптека № 1, г. Астрахань, ул. Яблочкова, д. 36; телефон: 36-00-61
        </a>
      </div>
      <div className="mb-[20px]">
        <Maps />
      </div>
    </div>
  );
}
