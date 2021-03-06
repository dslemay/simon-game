import * as React from 'react';
import classnames from 'classnames';
import './style.scss';

interface Props {
  gameOn: boolean;
  toggleGamePower: () => void;
}

const PowerButton: React.SFC<Props> = props => {
  const { gameOn, toggleGamePower } = props;
  return (
    <div className="power-button-wrapper">
      <span className="power-identifiers">OFF</span>
      <button className="toggle-power" type="button" onClick={toggleGamePower}>
        <span
          className={classnames('toggle-power-button', {
            'power-on': gameOn,
          })}
        />
      </button>
      <span className="power-identifiers">ON</span>
    </div>
  );
};

export default PowerButton;
