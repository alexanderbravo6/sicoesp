import { Button } from "@nextui-org/react";

export const ButtonSubmit = ({ label, isSubmitting }) => {


    return (
        <>
            {isSubmitting ? (
                <>
                    <Button color="primary" isLoading>
                        Cargando...
                    </Button>

                </>
            ) :
                (
                    <>
                        <button className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 rounded-medium [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover">
                            {label}
                        </button>
                    </>
                )
            }
        </>
    )
}