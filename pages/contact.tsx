import {VFC} from 'react';
import Header from '../components/Header';
import Page from '../components/Page';

const Contact: VFC = () => (
  <>
    <Header />
    <Page>
      <h1 className="col-span-12 text-6xl text-center font-cursive">Contact</h1>

      <div className="col-span-4 col-start-5">
        <label className="block">Name</label>
        <input className="block w-full text-2xl p-2 mb-4 rounded bg-brand-blue-100 focus:outline-none focus:ring" />

        <label className="block">Email</label>
        <input className="block w-full text-2xl p-2 mb-4 rounded bg-brand-blue-100 focus:outline-none focus:ring" />

        <label className="block">Message</label>
        <textarea className="block w-full text-2xl p-2 mb-4 rounded bg-brand-blue-100 focus:outline-none focus:ring" />

        <div className="text-center">
          <button
            type="button"
            className="bg-brand-blue-400 p-2 rounded text-2xl transform active:translate-y-1 shadow"
          >
            Send Message
          </button>
        </div>
      </div>
    </Page>
  </>
);

export default Contact;
