import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from '../../components/ListItem';
import { fetchArticles } from '../../store/actions';

class Articles extends Component {
  componentDidMount() {
    const { fetchArticlesAction } = this.props;

    fetchArticlesAction();
  }

  render() {
    const { articles } = this.props;

    return (
      <div>
        {this.props.articles.map((article, index) => {
          const { _id, title, body } = article;

          return (
            <ListItem
              link={`/article?id=${_id}`}
              title={title}
              content={body}
              key={_id}
              last={index === articles.length - 1}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ root }) => ({
  articles: root.articles,
});

const mapDispatchToProps = {
  fetchArticlesAction: fetchArticles,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Articles);
