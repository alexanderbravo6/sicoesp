import CustomModal from "@/componentes/UI/CustomModal";
import { Button, Divider, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import ComiteForm from "../Formulario/ComiteForm";
import ConvocatoriaForm from "../Formulario/ConvocatoriaForm";

export default function RegistroConvocatoriaInstitucion() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="primary" size="md" variant="ghost" onPress={onOpen}>
        Registrar por institución
      </Button>
      <CustomModal isOpen={isOpen} className={"max-w-5xl"} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-title flex-col gap-1">NUEVA CONVOCATORIA</ModalHeader>
              <Divider className="mb-2" />
              <ModalBody>
                <ConvocatoriaForm disabled={false} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </CustomModal>
    </>
  );
}
