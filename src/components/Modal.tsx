import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import { useAppDispatch } from '../types/types';
import { closeForm } from '../store';
const Backdrop = () => {
  const dispatch = useAppDispatch();
  return <div className="backDrop" onClick={() => dispatch(closeForm())}></div>;
};

const ModalOverlay: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="modal">
      <div>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays') as HTMLElement;

const Modal: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
