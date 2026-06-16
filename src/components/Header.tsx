interface HeaderProps {
  showForm: boolean;
  onToggleForm: () => void;
};

export default function Header(
  { showForm, onToggleForm }: HeaderProps
) {
  return (
    <>
      <header className="flex justify-between mb-10">
        <div className="flex items-center gap-4">
          <img
            src="./logo.png"
            className="w-17"
          />
          <h1 className="text-[42px] uppercase leading-none mt-1.5">hoje eu aprendi</h1>
        </div>
        <button
          onClick={onToggleForm}
          className="h-14.25 bg-linear-[135deg,#3b82f6,#ef4444,#16a34a,#eab308] text-xl pt-4 px-8 pb-4.25 btn-h"
        >
          { showForm ? 'fechar' : 'compartilhar um fato' }
        </button>
      </header>
    </>
  );
};