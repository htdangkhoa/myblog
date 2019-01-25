import './styles.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../store/actions';
import ListItem from '../../components/ListItem';

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchProjectsAction } = this.props;

    fetchProjectsAction();
  }

  render() {
    const { projects } = this.props;

    console.log(this.props)

    return (
      <div className="projects-container">
        {projects.map((project, index) => (
          <ListItem
            link={project.html_url}
            title={project.name}
            content={project.description}
            newTab
            key={project.id}
            last={index === projects.length - 1}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ root }) => ({
  projects: root.projects,
});

const mapDispatchToProps = {
  fetchProjectsAction: fetchProjects,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);
