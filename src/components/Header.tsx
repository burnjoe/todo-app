import Logo from "./Logo";
import Counter from "./Counter";
import { Todo } from "./App";

type HeaderProps = {
  todos: Todo[];
};

export default function Header({ todos }: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08]">
      <Logo />

      <Counter todos={todos} />
    </header>
  );
}
