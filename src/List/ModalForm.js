import React from "react";
import "./ModalForm.css";

const ModalForm = ({ form, onChange, onSave, onCloseModal }) => {
  return (
    <div className="modal is-open">
      <div className="modal-container">
        <button className="modal-close" onClick={onCloseModal}>
          X
        </button>
        <h2>Crear producto</h2>
        <form>
          <p>Productos:</p>
          <input name="product" value={form.product} onChange={onChange} />
          <p>Estado:</p>
          <select name="status" value={form.status} onChange={onChange}>
            <option value="activo">Activo</option>
            <option value="oculto">Oculto</option>
          </select>
        </form>
        <button
          className="common-button main-button modal-button"
          onClick={() => onSave(form._id)}
        >
          Guardar
        </button>
      </div>
    </div>
  );
};

export default ModalForm;
