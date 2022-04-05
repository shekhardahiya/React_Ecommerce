import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Cart from './cart.component';
export default function Example(props) {
    const [show, setShow] = useState(false);
    
    useEffect(()=>{
        setShow(true)
    },[])
    return (
      <>
        <button variant="primary" onLoad={() => setShow(true)}>
          Custom Width Modal
        </button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

          </Modal.Body>
        </Modal>
      </>
    );
  }
  