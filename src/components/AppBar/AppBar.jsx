import { Header, Section } from "./AppBar.styled";
import { StatusFilter } from "components/StatusFilter/StatusFilter";

export const AppBar = () => {
    return (
      <Header>
        <Section>
          <h2>Tasks</h2>
          <TaskCounter />
        </Section>
        <Section>
          <h2>Actions</h2>
          <Actions />
        </Section>
        <Section>
          <h2>Filter by status</h2>
          <StatusFilter />
        </Section>
      </Header>
    );
  };