import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kuumba | Home</title>
      </Head>
      <div className="px-32">
        <div className="py-4 flex justify-between">
          <span className="text-lg font-semibold">
            <span className="text-[#7077F8]">K</span>
            <span>uumba</span>
            <span>.</span>
          </span>
          <div className="flex gap-6">
            <Link href="#">
              <a className="text-gray-500">About Us</a>
            </Link>
            <Link href="#">
              <a className="text-gray-500">Features</a>
            </Link>
            <Link href="#">
              <a className="text-gray-500">Publish</a>
            </Link>
            <Link href="#">
              <a className="text-gray-500">Contact Us</a>
            </Link>
          </div>
          <button className="btn btn-primary btn-sm normal-case font-medium">
            Request early access
          </button>
        </div>

        <div className="bg-[#0C1B3A] text-white flex gap-6 p-12 rounded-2xl">
          <div className="flex gap-3">
            <div className="icon"></div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Read2Earn</h3>
              <p>Earn PEN tokens by reading and supporting other readers</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="icon"></div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Microtransaction</h3>
              <p>
                Enabling you to explore more titles and only paying for what you
                read / listened to
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="icon"></div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Connect</h3>
              <p>Connect with other readers, authors and publishers</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="icon"></div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">NFT eBooks</h3>
              <p>Generate lifetime royalties, own eBooks and audiobooks</p>
            </div>
          </div>
        </div>

        <div className="flex gap-10 p-16">
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-4xl font-semibold">Our mission</h2>
            <p>
              Language is meant to be a shared experience among people, however,
              our current digital and print media has privatized it to where it
              is experienced alone and made the cost of eBooks prohibitive for
              both readers and public libraries.
            </p>
            <p>
              Our mission is to change that and drive inclusive access to
              diverse eBooks across the globe by building a platform for both
              creators and readers to easily enjoy and share eBooks.
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-4xl font-semibold">Our aim</h2>
            <p>
              We aim to harness the power of blockchain technology to enable you
              save more, read more, earn more and share more of the joy of
              reading.
            </p>
            <p>
              NFT eBooks will empower authors and publishers to earn more
              through guaranteed lifetime royalties and readers to earn as they
              read and own digital content for themselves.
            </p>
          </div>
        </div>

        <div className="flex gap-32 p-16">
          <div className="bg-[#F5F6FF] rounded-2xl w-full"></div>
          <div className="flex flex-col gap-8 w-full">
            <h2 className="text-3xl font-semibold">Microtransactions</h2>
            <p className="text-gray-500">
              Stream microtransaction and only pay for what you read by paying
              per page, per chapters or even per percentage enabling you to save
              more and explore more.
            </p>
            <div className="flex flex-col gap-4 text-gray-500">
              <span>Select eBooks</span>
              <span>Start reading</span>
              <span>Only pay for what you read</span>
              <span>Earn as you read and stop anytime</span>
            </div>
          </div>
        </div>

        <div className="flex gap-32 p-16">
          <div className="flex flex-col gap-8 w-full">
            <h2 className="text-3xl font-semibold">Book sharing made easier</h2>
            <p className="text-gray-500">
              Want to read a book, but don&apos;t have access to it? Why
              don&apos;t you ask your fellow bookmongers.
            </p>
            <div className="flex flex-col gap-4 text-gray-500">
              <span>Borrow</span>
              <span>Lend</span>
              <span>Crowdfund</span>
              <span>Read and elevate</span>
            </div>
          </div>
          <div className="bg-[#F5F6FF] rounded-2xl w-full"></div>
        </div>

        <div className="flex gap-32 p-16">
          <div className="bg-[#F5F6FF] rounded-2xl w-full"></div>
          <div className="flex flex-col gap-8 w-full">
            <h2 className="text-3xl font-semibold">
              Become part of something bigger than yourself
            </h2>
            <p className="text-gray-500">
              Tune into exclusive podcasts created by your favorite creators
              around the globe and connect with readers around the globe
            </p>
            <div className="flex flex-col gap-4 text-gray-500">
              <span>Connect in realtime dialogue</span>
              <span>Learn new things</span>
              <span>Become part of something bigger than yourself</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-16 gap-12">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Roadmap</h2>
            <span>
              We are still in the idea phase and still developing our road
            </span>
          </div>
          <div className="flex gap-8">
            <div className="bg-[#F5F6FF] rounded-2xl py-10 flex flex-col gap-12 px-6 w-full">
              <h3 className="text-3xl underline font-semibold">Phase 1</h3>
              <div className="flex flex-col gap-4 text-gray-500">
                <span>Planning and research</span>
                <span>Team building</span>
                <span>Prototyping</span>
                <span>Design</span>
              </div>
            </div>
            <div className="bg-[#F5F6FF] rounded-2xl py-10 flex flex-col gap-12 px-6 w-full">
              <h3 className="text-3xl underline font-semibold">Phase 2</h3>
              <div className="flex flex-col gap-4 text-gray-500">
                <span>Development</span>
                <span>Wallet integration</span>
                <span>Microtransaction integration</span>
                <span>Community</span>
              </div>
            </div>
            <div className="bg-[#F5F6FF] rounded-2xl py-10 flex flex-col gap-12 px-6 w-full">
              <h3 className="text-3xl underline font-semibold">Phase 3</h3>
              <div className="flex flex-col gap-4 text-gray-500">
                <span>Book crowdfunding</span>
                <span>Lending and borrowing</span>
                <span>Book exchange update</span>
                <span>Publish ePubs as NFT eBooks</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#4169E1] -mx-32 py-12">
          <div className="w-2/5 mx-auto text-center text-white">
            <h1 className="text-4xl mb-4">
              If you are interested in promoting lifelong reading and learning
            </h1>
            <p>
              Are you an author, publisher or an agency? Get in touch with us at{" "}
              <span className="font-semibold">publish@kuumba.com</span>
            </p>
            <div className="flex gap-6 mt-10 justify-center">
              <div className="form-control">
                <label className="input-group">
                  <span className="bg-neutral text-white">Email</span>
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className="input input-bordered text-black"
                  />
                </label>
              </div>
              <button className="btn rounded-full">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
