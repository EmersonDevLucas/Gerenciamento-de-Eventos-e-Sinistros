<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Events') }}
        </h2>

        <p>Olá</p>
    </x-slot>

    @include('components.header-events')

    <div class="pt-1">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="flex px-6 py-2 text-gray-900 justify-between">
                    <p>Emerson <br> emerson-test</p>
                    <p>Gold <br> 0000</p>
                    <p>Email@test.com <br> (00) 00000-0000</p>
                    <p>00000000 <br> 00000000</p>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
