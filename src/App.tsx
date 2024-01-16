import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList.tsx';
import NewGoal from './components/NewGoal.tsx';
import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg'

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
}

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(title: string, description: string) {
    setGoals((prevState) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title,
        description
      }
      return [...prevState, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  )
}

export default App
