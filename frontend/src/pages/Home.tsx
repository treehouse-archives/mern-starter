import Button from "@/components/ui/Button";
import { heroIcons } from "@/lib/constants";
import useTitle from "@/lib/hooks/useTitle";
import { increment, selectCount } from "@/services/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  useTitle("Home");
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <section className="flex-center flex-col space-y-5 text-center md:space-y-10">
      <h1>
        MERN Stack <br /> Stater Template
      </h1>

      <div className="grid grid-cols-2 gap-3 lg:gap-6">
        {heroIcons.map((icon, idx) => (
          <img src={icon.icon} alt={icon.title} key={idx} className="size-28 md:size-32 lg:size-44" />
        ))}
      </div>
      <Button onClick={() => dispatch(increment())}>Count: {count}</Button>
    </section>
  );
};

export default Home;
