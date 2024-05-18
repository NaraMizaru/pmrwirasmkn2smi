<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('library/bootstrap/dist/css/bootstrap.min.css') }}">
    <title>Download PDF</title>
</head>

<body>
    <div class="container">
        <div class="table-responsive">
            <table class="table table-bordered  mt-5" id="table-1">
                <thead>
                    <tr>
                        <th class="text-center">
                            No
                        </th>
                        <th>Nama</th>
                        <th>Username</th>
                        <th>Kelas</th>
                        <th>Unit</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($anggota as $item)
                        <tr>
                            <td>
                                {{ $loop->iteration }}
                            </td>
                            <td>{{ $item->user->fullname }}</td>
                            <td>
                                {{ $item->user->username }}
                            </td>
                            <td>
                                {{ $item->kelas->name }}
                            </td>
                            <td>{{ $item->unit->name }}</td>
                            <td>
                                <div
                                    class="badge {{ $item->status == 'pengkacuan' ? 'badge-success' : 'badge-danger' }} text-capitalize">
                                    {{ $item->status }}</div>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>


    <script src="{{ asset('library/bootstrap/dist/js/bootstrap.min.js') }}"></script>
</body>

</html>
