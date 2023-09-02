import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "./config/routes";
import { useAppDispatch } from "./redux/hooks";
import { fetchTasks } from "./redux/slices/tasks";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <>
      <Routes>
        {
          APP_ROUTES.map(route => (
            <Route
              key={route.id}
              path={route.path}
              Component={route.component}
            />
          ))
        }
      </Routes>
    </>
  );
}

export default App;