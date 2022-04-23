import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";

import { motion, AnimatePresence } from "framer-motion";

import { initialStateType } from "../types";

export default function TodosCompleted() {
  const todosCompleted = useSelector(
    (state: initialStateType) => state.todosCompleted
  );

  type variantItems = {
    hidden: {
      opacity: number;
    };
    show: {
      opacity: number;
    };
  };

  const items: variantItems = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <Container>
      <motion.h3
        initial={{ opacity: 0, rotate: 15 }}
        animate={{ opacity: 1, rotate: 0 }}
      >
        Tasks Completed
      </motion.h3>
      {todosCompleted.length ? (
        <AnimatePresence>
          {todosCompleted.map((todo, i) => (
            <motion.li
              key={todo.id}
              className="list-unstyled my-2"
              variants={items}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.3, delay: i * 0.08 }}
              exit={{ opacity: 0, rotate: 15 }}
              layoutId={i.toString()}
            >
              {todo.name}
            </motion.li>
          ))}
        </AnimatePresence>
      ) : (
        <>
          <motion.p variants={items} initial="hidden" animate="show">
            <strong>Hurry up and finish your tasks lazy!</strong>
          </motion.p>
          <motion.img
            src="../images/lazy"
            alt="lazy"
            variants={items}
            initial="hidden"
            animate="show"
          />
        </>
      )}
    </Container>
  );
}