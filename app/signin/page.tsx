import '@aws-amplify/ui-react/styles.css';
import '@fontsource/inter/variable.css';
import ViewAuth from '../../components/ViewAuth';

export default function SigninPage() {
  return (
    <main className="bg-cover bg-accent-dark bg-slate-100 dark:bg-slate-900 ">
      <div className="mt-28 px-4 text-xs">
        <ViewAuth>
          <p className="text-4xl font-bold text-center">Ya estás autenticado</p>
        </ViewAuth>
      </div>
    </main>
  );
}
