const Button = (props) => {
  //  Write your code here.
  const { button } = props;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="title">Social Buttons</h1>
    <div className="btn">
      <Button buttonText="Like" className="like-button" />
      <Button buttonText="Comment" className="comment-button" />
      <Button buttonText="Share" className="share-button" />
    </div>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
