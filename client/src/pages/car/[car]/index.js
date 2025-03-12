export default function Cars({ car }) {
  return <>My car is a {car}</>;
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      car: params.car,
    },
  };
}
