import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState
} from 'react'

interface IsFirstRenderProps {
	isFirstRender: boolean
	setIsFirstRender: React.Dispatch<React.SetStateAction<boolean>>
}

const IsFirstRenderContext = createContext<IsFirstRenderProps | undefined>(
	undefined
)

export const IsFirstRenderProvider: React.FC<{ children: ReactNode }> = ({
	children
}) => {
	const [isFirstRender, setIsFirstRender] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setIsFirstRender(false)
		}, 3000)
	}, [])

	return (
		<IsFirstRenderContext.Provider value={{ isFirstRender, setIsFirstRender }}>
			{children}
		</IsFirstRenderContext.Provider>
	)
}

export const useIsFirstRender = () => {
	const context = useContext(IsFirstRenderContext)
	if (!context) {
		throw new Error(
			'useIsFirstRender must be used within an IsFirstRenderProvider'
		)
	}
	return context
}
