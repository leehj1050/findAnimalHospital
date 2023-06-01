import GoogleMap from "./GoogleMap";

export default function Home() {
  const api = async () => {
    await fetch(
      "https://apis.data.go.kr/6260000/BusanAnimalHospService/getTblAnimalHospital?serviceKey=jeICOQ5OH0NtgN5vDpH4GP2KQzyA%2FE9QEbXaITELnvOGQJOeRAQqj34hlcolDpkvwpdAL0vmGt1OX6YgS9j5rQ%3D%3D&pageNo=10&numOfRows=15&resultType=json"
    )
      .then((res) => res.json())
      .then((data) => console.log(data.getTblAnimalHospital.body.items));
  };

  api();
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <div>
      <h1>위도 경도를 이용한 지도</h1>
      <GoogleMap apiKey={apiKey} />
    </div>
  );
}
