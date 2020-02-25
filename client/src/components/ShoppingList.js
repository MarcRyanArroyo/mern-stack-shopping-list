import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  deleteButtonOnClickHandler = deleteID => {
    this.props.deleteItem(deleteID);
  };
  render() {
    const { items } = this.props.item;
    return (
      <div>
        <Container>
          <ListGroup>
            <TransitionGroup className='Shopping-list'>
              {items.map(item => (
                <CSSTransition key={item._id} timeout={500} classNames='fade'>
                  <ListGroupItem>
                    <Button
                      className='remove-btn'
                      color='danger'
                      size='sm'
                      onClick={() => this.deleteButtonOnClickHandler(item._id)}
                    >
                      &times;
                    </Button>
                    {item.name}
                  </ListGroupItem>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
        </Container>
      </div>
    );
  }
}
ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func,
  item: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
