
function Button({ label }: { label: string }) {
    return (
        <div>
            <button className="bg-black text-white px-4 py-2">{label}</button>;
        </div>
    )
}

export default Button
