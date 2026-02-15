/**
 * @typedef {object} SectionHeaderProps
 * @prop {string} title
 * @prop {string} [description]
 * @prop {string[]} [wordsColored]
 */

/**
 * @type {React.FC<SectionHeaderProps>}
 * @param {SectionHeaderProps} props
 */

function SectionHeader({ title, description, wordsColored, children }) {
    return (
        <div className="section-header flex md:items-center justify-between gap-5 max-md:flex-col mb-5 md:mb-10">
            <div className="text-wrapper w-full">
                <h2 className="font-medium text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
                    {
                        wordsColored ? (
                            String(title).split(' ').map((word, index) => (wordsColored.includes(word) ? <span className="text-green-60" key={index}>{index > 0 ? ' ' : ''}{word}</span> : word))
                        ) : (
                            title
                        )
                    }
                </h2>
                {description && <p className="mt-3 md:max-w-250">{description}</p>}
            </div>
            <div className="children shrink-0">
                {children}
            </div>
        </div>
    )
}

export default SectionHeader;