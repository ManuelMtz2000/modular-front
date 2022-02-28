import { IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonTextarea, IonToggle } from '@ionic/react';
import { useState } from 'react';
import './ExploreContainer.css';

const ExploreContainer: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [hairColor, setCategoria] = useState<string>('1');
  //<IonLabel>Tipo de publicacón: {JSON.stringify(checked)}</IonLabel>
  return (
    <div className="m-4 bg-white p-5 rounded-md text-black">
        <div className='flex justify-center items-center'>
            <IonLabel>Busco un objeto</IonLabel>
            <IonToggle color='warning' checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
            <IonLabel>Encontre un objeto</IonLabel>
        </div>
        <form action="" className='mt-4'>
            <div className='mb-3'>
                <IonLabel>Descripción corta:</IonLabel>
                <IonInput className='bg-gray-200'></IonInput>
            </div>
            <div className='mb-3'>
                <IonLabel>Descripción larga:</IonLabel>
                <IonTextarea className='bg-gray-200'></IonTextarea>
            </div>
            <div className='mb-3'>
                <IonLabel>Etiquetas para busqueda (por lo menos, 1 obligatoria):</IonLabel>
                <IonInput className='bg-gray-200 mb-1' placeholder="Etiqueta #1"></IonInput>
                <IonInput className='bg-gray-200 mb-1' placeholder="Etiqueta #2"></IonInput>
                <IonInput className='bg-gray-200 mb-1' placeholder="Etiqueta #3"></IonInput>
                <IonInput className='bg-gray-200 mb-1' placeholder="Etiqueta #4"></IonInput>
                <IonInput className='bg-gray-200 mb-1' placeholder="Etiqueta #5"></IonInput>
            </div>
            <div className='mb-3'>
                <IonLabel>Categoria del objeto:</IonLabel>
                <IonSelect color='light' className='bg-gray-200' value={hairColor} multiple={true} okText="Listo" cancelText="Cancelar" onIonChange={e => setCategoria(e.detail.value)}>
                    <IonSelectOption value="1" className='text-black'>Electronicos</IonSelectOption>
                    <IonSelectOption value="2" className='text-black'>Documentos</IonSelectOption>
                    <IonSelectOption value="3" className='text-black'>Otros</IonSelectOption>
                </IonSelect>
            </div>
        </form>
    </div>
  );
};

export default ExploreContainer;
