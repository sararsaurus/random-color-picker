export function Button() {
  return <button className={this.props.light ? "light-button" : "dark-button"}>Refresh</button>;
}
