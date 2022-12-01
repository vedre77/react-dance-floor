import './cell.css';

export default function Cell(props) {

    const dancingCells = document.getElementsByClassName('active');
    if (dancingCells.length > 0) {
      for (let elem of dancingCells) {
        elem.style.backgroundColor = `rgba${props.colors}`;
      };
    }

    //  style={{ backgroundColor: `rgba${prop.style}`  }}

    return (
        <div className="cell" 
        id={props.id} 
        role="button"
        tabIndex="0"
        onKeyDown={props.moveCell}>
        </div>
    );
}
